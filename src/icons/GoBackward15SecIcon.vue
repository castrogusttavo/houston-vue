
<template>
  <Icon :iconName="'go-backward-15-sec'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GoBackward15SecIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'go-backward-15-sec'
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
