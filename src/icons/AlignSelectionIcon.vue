
<template>
  <Icon :iconName="'align-selection'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlignSelectionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'align-selection'
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
