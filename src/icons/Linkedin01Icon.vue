
<template>
  <Icon :iconName="'linkedin-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Linkedin01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'linkedin-01'
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
