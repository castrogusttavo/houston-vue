
<template>
  <Icon :iconName="'laurel-wreath-first-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LaurelWreathFirst01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'laurel-wreath-first-01'
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
