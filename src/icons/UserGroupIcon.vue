
<template>
  <Icon :iconName="'user-group'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserGroupIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-group'
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
