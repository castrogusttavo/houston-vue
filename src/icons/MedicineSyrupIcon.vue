
<template>
  <Icon :iconName="'medicine-syrup'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MedicineSyrupIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'medicine-syrup'
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
