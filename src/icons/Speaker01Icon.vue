
<template>
  <Icon :iconName="'speaker-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Speaker01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'speaker-01'
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
