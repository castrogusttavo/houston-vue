
<template>
  <Icon :iconName="'quran-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Quran03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'quran-03'
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
