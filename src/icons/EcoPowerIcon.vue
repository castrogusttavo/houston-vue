
<template>
  <Icon :iconName="'eco-power'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EcoPowerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'eco-power'
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
