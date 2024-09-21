
<template>
  <Icon :iconName="'left-to-right-list-number'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LeftToRightListNumberIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'left-to-right-list-number'
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
