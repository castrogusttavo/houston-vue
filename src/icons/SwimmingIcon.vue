
<template>
  <Icon :iconName="'swimming'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwimmingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swimming'
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
