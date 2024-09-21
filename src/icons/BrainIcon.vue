
<template>
  <Icon :iconName="'brain'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BrainIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'brain'
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
