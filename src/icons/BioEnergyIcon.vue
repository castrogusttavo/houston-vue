
<template>
  <Icon :iconName="'bio-energy'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BioEnergyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bio-energy'
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
