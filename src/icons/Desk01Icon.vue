
<template>
  <Icon :iconName="'desk-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Desk01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'desk-01'
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
