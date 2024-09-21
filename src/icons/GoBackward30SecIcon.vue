
<template>
  <Icon :iconName="'go-backward-30-sec'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GoBackward30SecIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'go-backward-30-sec'
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
