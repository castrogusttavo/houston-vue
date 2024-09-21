
<template>
  <Icon :iconName="'zip-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Zip01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'zip-01'
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
