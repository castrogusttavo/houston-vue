
<template>
  <Icon :iconName="'text-align-justify-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextAlignJustifyLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-align-justify-left'
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
