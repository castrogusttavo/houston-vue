
<template>
  <Icon :iconName="'olympic-torch'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'OlympicTorchIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'olympic-torch'
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
