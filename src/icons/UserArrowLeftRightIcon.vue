
<template>
  <Icon :iconName="'user-arrow-left-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserArrowLeftRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-arrow-left-right'
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
