
<template>
  <Icon :iconName="'ease-out'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EaseOutIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ease-out'
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
