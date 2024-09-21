
<template>
  <Icon :iconName="'clubs-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Clubs01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'clubs-01'
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
