
<template>
  <Icon :iconName="'user-list'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserListIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-list'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
