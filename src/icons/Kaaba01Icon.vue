
<template>
  <Icon :iconName="'kaaba-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Kaaba01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'kaaba-01'
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
