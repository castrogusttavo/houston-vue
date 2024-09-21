
<template>
  <Icon :iconName="'hydro-power'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HydroPowerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hydro-power'
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
