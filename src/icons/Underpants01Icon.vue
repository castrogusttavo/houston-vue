
<template>
  <Icon :iconName="'underpants-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Underpants01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'underpants-01'
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
