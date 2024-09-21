
<template>
  <Icon :iconName="'quran-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Quran01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'quran-01'
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
