
<template>
  <Icon :iconName="'treadmill-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Treadmill01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'treadmill-01'
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
