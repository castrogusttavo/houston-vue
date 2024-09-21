
<template>
  <Icon :iconName="'ease-in-out'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EaseInOutIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ease-in-out'
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
