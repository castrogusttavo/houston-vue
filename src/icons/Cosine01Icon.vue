
<template>
  <Icon :iconName="'cosine-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Cosine01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cosine-01'
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
