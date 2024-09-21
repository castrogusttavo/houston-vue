
<template>
  <Icon :iconName="'laurel-wreath-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LaurelWreath01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'laurel-wreath-01'
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
