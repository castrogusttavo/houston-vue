
<template>
  <Icon :iconName="'tongue-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Tongue01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tongue-01'
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
