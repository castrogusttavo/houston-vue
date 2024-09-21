
<template>
  <Icon :iconName="'flowchart-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Flowchart01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'flowchart-01'
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
