
<template>
  <Icon :iconName="'burj-al-arab'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BurjAlArabIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'burj-al-arab'
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
