
<template>
  <Icon :iconName="'presentation-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Presentation01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'presentation-01'
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
