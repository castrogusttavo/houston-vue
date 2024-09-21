
<template>
  <Icon :iconName="'dialpad-circle-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DialpadCircle01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dialpad-circle-01'
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
