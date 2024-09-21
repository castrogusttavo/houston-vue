
<template>
  <Icon :iconName="'text-align-justify-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextAlignJustifyRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-align-justify-right'
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
