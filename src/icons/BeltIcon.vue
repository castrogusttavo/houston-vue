
<template>
  <Icon :iconName="'belt'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BeltIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'belt'
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
