
<template>
  <Icon :iconName="'microwave'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MicrowaveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'microwave'
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
