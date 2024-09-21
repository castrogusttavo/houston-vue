
<template>
  <Icon :iconName="'left-to-right-list-dash'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LeftToRightListDashIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'left-to-right-list-dash'
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
