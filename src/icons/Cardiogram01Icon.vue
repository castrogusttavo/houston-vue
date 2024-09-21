
<template>
  <Icon :iconName="'cardiogram-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Cardiogram01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cardiogram-01'
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
