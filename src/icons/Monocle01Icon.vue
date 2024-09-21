
<template>
  <Icon :iconName="'monocle-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Monocle01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'monocle-01'
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
