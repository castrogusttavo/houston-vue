
<template>
  <Icon :iconName="'plus-sign-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PlusSignCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'plus-sign-circle'
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
