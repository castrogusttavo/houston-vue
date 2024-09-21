
<template>
  <Icon :iconName="'user-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-circle'
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
